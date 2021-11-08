import { calculateReceiving } from "./common"
import { ACCOUNTS_ADDRESSES, DEFAULT_ACCOUNT_ADDRESS, FEE_OPTIONS, getFee } from "./constants"

export const TEST_DEFAULT_ACCOUNT_ADDRESS = "boa1456fjknd12345345908nnn1324234"

export const TEST_ACCOUNTS_ADDRESSES = [
  {
    value: TEST_DEFAULT_ACCOUNT_ADDRESS,
    label: TEST_DEFAULT_ACCOUNT_ADDRESS,
  },
]

const TEST_FEE_OPTIONS = [
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

const TEST_SENDER_DATA = {
  address: DEFAULT_ACCOUNT_ADDRESS,
  spendableBalance: 100.9999999,
  balance: 100.9999999,
}

describe("utils", () => {
  test("matching default address", () => {
    expect(DEFAULT_ACCOUNT_ADDRESS).toBe(TEST_DEFAULT_ACCOUNT_ADDRESS)
  })

  test("matching accounts addresses", () => {
    expect(ACCOUNTS_ADDRESSES).toEqual(TEST_ACCOUNTS_ADDRESSES)
  })

  test("matching fee options", () => {
    expect(FEE_OPTIONS).toEqual(TEST_FEE_OPTIONS)
  })

  test("testing getFee fn with fee type medium", () => {
    const selectedFeeOption = getFee("medium")
    expect(selectedFeeOption).toBe("2.52")
  })

  test("testing getFee fn with fee type unavailable in the FEE_OPTIONS", () => {
    const selectedFeeOption = getFee()
    expect(selectedFeeOption).toBe("2.52")
  })

  test("testing getFee fn with fee type undefined", () => {
    const selectedFeeOption = getFee("loww")
    expect(selectedFeeOption).toBe("2.52")
  })

  test("testing calculateReceiving fn with case 1", () => {
    const expectedRowData = {
      address: DEFAULT_ACCOUNT_ADDRESS,
      spendableBalance: 100.9999999,
      balance: 100.9999999,
      drawn: 100.9999999,
      remaining: -99.0000001,
    }
    const calculatedRowData = calculateReceiving(TEST_SENDER_DATA, "200")
    expect(calculatedRowData).toEqual(expectedRowData)
  })

  test("testing calculateReceiving fn with case 2", () => {
    const expectedRowData = {
      address: DEFAULT_ACCOUNT_ADDRESS,
      spendableBalance: 100.9999999,
      balance: 100.9999999,
      drawn: 99.88888888888,
      remaining: 1.111111011120002,
    }
    const calculatedRowData = calculateReceiving(TEST_SENDER_DATA, "99.88888888888")
    expect(calculatedRowData).toEqual(expectedRowData)
  })

  test("testing calculateReceiving fn with amount as type number", () => {
    const expectedRowData = {
      address: DEFAULT_ACCOUNT_ADDRESS,
      spendableBalance: 100.9999999,
      balance: 100.9999999,
      drawn: 99.88888888888,
      remaining: 1.111111011120002,
    }
    const calculatedRowData = calculateReceiving(TEST_SENDER_DATA, 99.88888888888)
    expect(calculatedRowData).toEqual(expectedRowData)
  })

  test("testing calculateReceiving fn with amount as undefined", () => {
    const expectedRowData = {
      address: DEFAULT_ACCOUNT_ADDRESS,
      spendableBalance: 100.9999999,
      balance: 100.9999999,
      drawn: 0,
      remaining: 100.9999999,
    }
    const calculatedRowData = calculateReceiving(TEST_SENDER_DATA)
    expect(calculatedRowData).toEqual(expectedRowData)
  })
})
