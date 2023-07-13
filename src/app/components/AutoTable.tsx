import { GenericType } from "../generic"
import GenericDisplay from "./GenericDisplay"


export interface AutoTableColumn<T> {
    key: keyof T
    name: string
    align?: "center" | "left" | "right"
    type?: GenericType
}
export interface AutoTableProps<T extends object> {
    columns: AutoTableColumn<T>[],
    rows: T[],
}

export default function AutoTable<T extends object>({columns, rows}: AutoTableProps<T>) {
    return <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          {columns.map(c => <th key={c.key as any}>
            {c.name}
          </th>)}
        </tr>
      </thead>
      <tbody>

        {rows.map((r, ri) => <tr key={ri}>
            
          {columns.map(c => <td key={c.key as any}>
            <GenericDisplay
              type={c.type}
              value={r[c.key]}
            />
          </td>)}
        </tr>)}
        {/* row 1 */}
      </tbody>
    </table>
  </div>
}