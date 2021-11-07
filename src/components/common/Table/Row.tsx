import clsx from "clsx"
import BankLogo from "src/assets/bank.png"
import DeleteLogo from "src/assets/delete.png"
import { RowProps } from "./Table.types"

const Row: React.FC<RowProps> = ({ rowData, colsData, showActions }) => {
  return (
    <tr>
      {colsData.map(({ key, type }, idx) => {
        const data = rowData[key]
        const cellData = data || "-"
        const isAddress = type === "address"
        const isDanger = type === "number" && Number(data) < 0
        return (
          <td key={`TableCell-${idx}`} className={clsx({ info: isAddress, danger: isDanger })}>
            {isAddress ? (
              <div className="address-container">
                <div className="address-wrapper">
                  <img src={BankLogo} />
                </div>

                {cellData}
              </div>
            ) : (
              <>{cellData}</>
            )}
          </td>
        )
      })}
      {showActions && (
        <td className="text-center">
          <img src={DeleteLogo} />
        </td>
      )}
    </tr>
  )
}

export default Row
