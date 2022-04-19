import { FeeHistoryResult } from 'web3-common';
import { BlockTags, Numbers } from 'web3-utils';

import { BlockNumberOrTag } from '../../../../src/types';

export const mockRpcResponse: FeeHistoryResult = {
	oldestBlock: '0xa30950',
	baseFeePerGas: '0x9',
	reward: [],
};

/**
 * Array consists of:
 * - Test title
 * - Input parameters:
 *     - blockCount
 * 	   - newestBlock
 * 	   - rewardPercentiles
 */
type TestData = [string, [Numbers, BlockNumberOrTag | undefined, Numbers[]]];
export const testData: TestData[] = [
	// Testing blockCount cases
	[
		'blockCount = "0x4b7", newestBlock = "0xa30950", rewardPercentiles = ["0x0"]',
		['0x4b7', '0xa30950', ['0x0']],
	],
	[
		'blockCount = 1207, newestBlock = "0xa30950", rewardPercentiles = ["0x0"]',
		[1207, '0xa30950', ['0x0']],
	],
	[
		'blockCount = "1207", newestBlock = "0xa30950", rewardPercentiles = ["0x0"]',
		['1207', '0xa30950', ['0x0']],
	],
	[
		'blockCount = BigInt("0x4b7"), newestBlock = "0xa30950", rewardPercentiles = ["0x0"]',
		[BigInt('0x4b7'), '0xa30950', ['0x0']],
	],

	// Testing newestBlock cases
	// blockNumber = BlockTag
	[
		'blockCount = "0x4b7", newestBlock = BlockTags.LATEST, rewardPercentiles = ["0x0"]',
		['0x4b7', BlockTags.LATEST, ['0x0']],
	],
	[
		'blockCount = "0x4b7", newestBlock = BlockTags.EARLIEST, rewardPercentiles = ["0x0"]',
		['0x4b7', BlockTags.EARLIEST, ['0x0']],
	],
	[
		'blockCount = "0x4b7", newestBlock = BlockTags.PENDING, rewardPercentiles = ["0x0"]',
		['0x4b7', BlockTags.PENDING, ['0x0']],
	],
	// blockNumber = Numbers
	[
		'blockCount = "0x4b7", newestBlock = 1207, rewardPercentiles = ["0x0"]',
		['0x4b7', 1207, ['0x0']],
	],
	[
		'blockCount = "0x4b7", newestBlock = "1207", rewardPercentiles = ["0x0"]',
		['0x4b7', '1207', ['0x0']],
	],
	[
		'blockCount = "0x4b7", newestBlock = BigInt("0x4b7"), rewardPercentiles = ["0x0"]',
		['0x4b7', BigInt('0x4b7'), ['0x0']],
	],
	[
		'blockCount = "0x4b7", newestBlock = undefined, rewardPercentiles = ["0x0"]',
		['0x4b7', undefined, ['0x0']],
	],

	// Testing rewardPercentiles cases
	[
		'blockCount = "0x4b7", newestBlock = "0xa30950", rewardPercentiles = [0]',
		['0x4b7', '0xa30950', [0]],
	],
	[
		'blockCount = "0x4b7", newestBlock = "0xa30950", rewardPercentiles = ["0"]',
		['0x4b7', '0xa30950', ['0']],
	],
	[
		'blockCount = "0x4b7", newestBlock = "0xa30950", rewardPercentiles = [BigInt("0x0")]',
		['0x4b7', '0xa30950', [BigInt('0x0')]],
	],
];