import { TableProps } from "./Table.types"
import "./Table.styles.scss"
import Row from "./Row"

const Table: React.FC<TableProps> = ({ colsData, rowsData = [], showActions }) => {
  return (
    <div>
      {colsData?.length && (
        <table className="table">
          <thead>
            <tr>
              {colsData.map(({ title, width }, idx) => (
                <th key={`TableHeaderCell-${title}-${idx}`} style={{ width }}>
                  {title}
                </th>
              ))}
              {showActions && <th className="text-center">Action</th>}
            </tr>
          </thead>
          <tbody>
            {rowsData.map((rowData, idx) => (
              <Row key={`TableRow-${idx}`} rowData={rowData} colsData={colsData} showActions={showActions} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Table
