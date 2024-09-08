import { ChainId } from '@im33357/uniswap-v2-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x7Bb492B7ddd6e405e36e916dd62c83cBbc67A6d7'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
