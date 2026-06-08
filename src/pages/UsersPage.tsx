import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

type BankStatement = {
  id: string;
  created_at: string;
  [key: string]: unknown;
};

const SIMPLE_TABLE_COLS = 5;

function isObject(val: unknown): val is Record<string, unknown> {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
}

function formatValue(key: string, val: unknown): string {
  if (val === null || val === undefined) return '—';
  if (key === 'created_at') {
    return new Date(String(val)).toLocaleDateString('ar-SA', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  }
  if (isObject(val)) return JSON.stringify(val);
  if (Array.isArray(val)) return JSON.stringify(val);
  return String(val);
}

function renderDetailValue(val: unknown): React.ReactNode {
  if (val === null || val === undefined) return <span className="text-slate-400">—</span>;
  if (isObject(val)) {
    return (
      <pre className="whitespace-pre-wrap rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-700" dir="ltr">
        {JSON.stringify(val, null, 2)}
      </pre>
    );
  }
  if (Array.isArray(val)) {
    return (
      <pre className="whitespace-pre-wrap rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-700" dir="ltr">
        {JSON.stringify(val, null, 2)}
      </pre>
    );
  }
  return <span>{String(val)}</span>;
}

export function UsersPage() {
  const navigate = useNavigate();
  const [statements, setStatements] = useState<BankStatement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [selectedRow, setSelectedRow] = useState<BankStatement | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState<Record<string, unknown>>({});
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login-ayla', { replace: true });
        return;
      }
      setUserEmail(session.user.email ?? '');

      const { data, error: fetchError } = await supabase
        .from('bank_statements')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setStatements((data as BankStatement[]) ?? []);
      }
      setLoading(false);
    }
    load();
  }, [navigate]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate('/login-ayla', { replace: true });
  }

  function handleRowClick(row: BankStatement) {
    if (selectedRow?.id === row.id && !editMode) {
      setSelectedRow(null);
      return;
    }
    setSelectedRow(row);
    setEditMode(false);
    setSaveError(null);
  }

  function startEdit() {
    if (!selectedRow) return;
    setEditData({ ...selectedRow });
    setEditMode(true);
    setSaveError(null);
  }

  function cancelEdit() {
    setEditMode(false);
    setSaveError(null);
  }

  async function saveEdit() {
    if (!selectedRow) return;
    setSaving(true);
    setSaveError(null);

    const { created_at, id, ...updateable } = editData;

    const { data, error: updateError } = await supabase
      .from('bank_statements')
      .update(updateable)
      .eq('id', selectedRow.id)
      .select()
      .single();

    if (updateError) {
      setSaveError(updateError.message);
      setSaving(false);
      return;
    }

    if (data) {
      const updated = data as BankStatement;
      setSelectedRow(updated);
      setStatements((prev) =>
        prev.map((s) => (s.id === updated.id ? updated : s))
      );
    }
    setEditMode(false);
    setSaving(false);
  }

  function handleEditChange(key: string, value: string) {
    setEditData((prev) => ({ ...prev, [key]: value }));
  }

  if (loading) {
    return (
      <div dir="rtl" className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-3 border-teal-200 border-t-teal-700" />
          <p className="mt-3 text-sm text-slate-500">جارٍ التحميل...</p>
        </div>
      </div>
    );
  }

  const columns = statements.length > 0 ? Object.keys(statements[0]) : [];
  const visibleColumns = columns.slice(0, SIMPLE_TABLE_COLS);
  const hasMoreColumns = columns.length > SIMPLE_TABLE_COLS;

  return (
    <div dir="rtl" className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">كشوفات البنك</h1>
          <p className="mt-1 text-sm text-slate-500">مرحباً، {userEmail}</p>
        </div>
        <button
          onClick={handleLogout}
          className="inline-flex self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-red-200 hover:text-red-700"
        >
          تسجيل الخروج
        </button>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      {statements.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
          <p className="text-slate-500">لا توجد كشوفات بنكية بعد</p>
        </div>
      ) : (
        <>
          {/* Table */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/80">
                    {visibleColumns.map((key) => (
                      <th
                        key={key}
                        className="px-4 py-3 text-right font-semibold text-slate-600 whitespace-nowrap"
                      >
                        {key}
                      </th>
                    ))}
                    {hasMoreColumns && (
                      <th className="px-4 py-3 text-right font-semibold text-slate-400 whitespace-nowrap">
                        +{columns.length - SIMPLE_TABLE_COLS}
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {statements.map((row) => {
                    const isSelected = selectedRow?.id === row.id;
                    return (
                      <tr
                        key={row.id}
                        onClick={() => handleRowClick(row)}
                        className={`cursor-pointer border-b border-slate-50 transition ${
                          isSelected
                            ? 'bg-teal-50/70 hover:bg-teal-50/80'
                            : 'hover:bg-slate-50/60'
                        }`}
                      >
                        {visibleColumns.map((key) => (
                          <td key={key} className="px-4 py-3 text-slate-700 whitespace-nowrap">
                            {formatValue(key, row[key])}
                          </td>
                        ))}
                        {hasMoreColumns && (
                          <td className="px-4 py-3 text-slate-400 whitespace-nowrap text-xs">
                            اضغط للتفاصيل
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detail Panel */}
          {selectedRow && (
            <div className="mt-6 rounded-2xl border border-teal-200/60 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <h2 className="text-lg font-bold text-slate-900">تفاصيل الصف</h2>
                <div className="flex items-center gap-2">
                  {!editMode ? (
                    <button
                      onClick={startEdit}
                      className="rounded-xl bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
                    >
                      تعديل
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={cancelEdit}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                      >
                        إلغاء
                      </button>
                      <button
                        onClick={saveEdit}
                        disabled={saving}
                        className="rounded-xl bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 disabled:opacity-60"
                      >
                        {saving ? 'جارٍ الحفظ...' : 'حفظ'}
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => { setSelectedRow(null); setEditMode(false); }}
                    className="rounded-xl border border-slate-200 bg-white p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
                    aria-label="إغلاق"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {saveError && (
                <div className="mx-6 mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {saveError}
                </div>
              )}

              <div className="px-6 py-4">
                {editMode ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {columns.map((key) => {
                      const rawVal = editData[key];
                      const isComplex = isObject(rawVal) || Array.isArray(rawVal);

                      return (
                        <div key={key} className={isComplex ? 'sm:col-span-2' : ''}>
                          <label className="mb-1.5 block text-xs font-semibold text-slate-500">
                            {key}
                          </label>
                          {isComplex ? (
                            <textarea
                              value={typeof rawVal === 'string' ? rawVal : JSON.stringify(rawVal, null, 2)}
                              onChange={(e) => handleEditChange(key, e.target.value)}
                              dir="ltr"
                              rows={5}
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-mono text-xs text-slate-700 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                            />
                          ) : (
                            <input
                              type="text"
                              value={rawVal === null || rawVal === undefined ? '' : String(rawVal)}
                              onChange={(e) => handleEditChange(key, e.target.value)}
                              dir={key === 'created_at' || key === 'id' ? 'ltr' : undefined}
                              readOnly={key === 'id' || key === 'created_at'}
                              className={`w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                                key === 'id' || key === 'created_at' ? 'bg-slate-50 text-slate-400 cursor-not-allowed' : 'bg-white'
                              }`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {columns.map((key) => {
                      const val = selectedRow[key];
                      const isComplex = isObject(val) || Array.isArray(val);

                      return (
                        <div key={key} className={isComplex ? 'sm:col-span-2' : ''}>
                          <span className="text-xs font-semibold text-slate-500">{key}</span>
                          <div className="mt-1 text-sm text-slate-700">
                            {renderDetailValue(val)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
