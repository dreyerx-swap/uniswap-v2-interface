import { Currency, ETHER, Token } from '@im33357/uniswap-v2-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'DRX'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
