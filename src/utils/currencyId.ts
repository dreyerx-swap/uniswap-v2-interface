import { Currency, ETHER, Token } from '@dreyerxswap/v2-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'DRX'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
