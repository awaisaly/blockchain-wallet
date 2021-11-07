export const DEFAULT_ACCOUNT_ADDRESS = "boa1456fjknd12345345908nnn1324234"
export const ACCOUNTS_ADDRESSES = [
  {
    value: DEFAULT_ACCOUNT_ADDRESS,
    label: DEFAULT_ACCOUNT_ADDRESS,
  },
]
export const FEE_OPTIONS = [
  {
    value: "low",
    label: "Low",
    fee: "1.52",
  },
  {
    value: "medium",
    label: "Medium",
    fee: "2.52",
  },
  {
    value: "high",
    label: "High",
    fee: "3.52",
  },
]

export const getFee = (selectedFeeType: string): string => {
  return FEE_OPTIONS.find(option => option.value === selectedFeeType)?.fee || "2.52"
}
