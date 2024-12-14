export const asterSoulABI = [
	{
		inputs: [
			{
				internalType: 'string',
				name: 'name_',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'symbol_',
				type: 'string',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'AsterSoulAlreadyClaimed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC721AddressZeroIsNotaValidOwner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC721ApprovalToCurrentOwner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC721ApproveCallerIsNotOwnerNorApprovedForAll',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC721ApproveToCaller',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC721InvalidTokenId',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC721MintToTheZeroAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC721NotApprovedOrOwner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC721TokenAlreadyMinted',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC721TransferFromIncorrectOwner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC721TransferToNonReceiverImplementer',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC721TransferToTheZeroAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NoAsterSoulOnGivenAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKApprovalForAssetsToCurrentOwner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKApproveForAssetsCallerIsNotOwnerNorApprovedForAll',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKAssetAlreadyExists',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKBadPriorityListLength',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKCannotTransferSoulbound',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKCatalogRequiredForParts',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKChildAlreadyExists',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKChildIndexOutOfRange',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKEquippableEquipNotAllowedByCatalog',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKIdZeroForbidden',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKIndexOutOfRange',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKIsNotContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKMaxPendingAssetsReached',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKMaxPendingChildrenReached',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'childContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'childId',
				type: 'uint256',
			},
		],
		name: 'RMRKMaxRecursiveBurnsReached',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKMustUnequipFirst',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNestableTooDeep',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNestableTransferToDescendant',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNestableTransferToNonRMRKNestableImplementer',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNestableTransferToSelf',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNewContributorIsZeroAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNewOwnerIsZeroAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNoAssetMatchingId',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNotApprovedForAssetsOrOwner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNotApprovedOrDirectOwner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNotEquipped',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNotOwner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKNotOwnerOrContributor',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKPendingChildIndexOutOfRange',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKSlotAlreadyUsed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKTargetAssetCannotReceiveSlot',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKTokenCannotBeEquippedWithAssetIntoSlot',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKTokenDoesNotHaveAsset',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKUnexpectedAssetId',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKUnexpectedChildId',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKUnexpectedNumberOfAssets',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RMRKUnexpectedNumberOfChildren',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RentrantCall',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'AllChildrenRejected',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'approved',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'Approval',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'ApprovalForAll',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'ApprovalForAllForAssets',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'approved',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'ApprovalForAssets',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
			{
				indexed: true,
				internalType: 'uint64',
				name: 'replacesId',
				type: 'uint64',
			},
		],
		name: 'AssetAccepted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
			{
				indexed: true,
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
			{
				indexed: true,
				internalType: 'uint64',
				name: 'replacesId',
				type: 'uint64',
			},
		],
		name: 'AssetAddedToTokens',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'AssetPrioritySet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
		],
		name: 'AssetRejected',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
		],
		name: 'AssetSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'childIndex',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'childAddress',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'childId',
				type: 'uint256',
			},
		],
		name: 'ChildAccepted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
			{
				indexed: true,
				internalType: 'uint64',
				name: 'slotPartId',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'childId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'childAddress',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'childAssetId',
				type: 'uint64',
			},
		],
		name: 'ChildAssetEquipped',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
			{
				indexed: true,
				internalType: 'uint64',
				name: 'slotPartId',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'childId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'childAddress',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'childAssetId',
				type: 'uint64',
			},
		],
		name: 'ChildAssetUnequipped',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'childIndex',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'childAddress',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'childId',
				type: 'uint256',
			},
		],
		name: 'ChildProposed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'childIndex',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'childAddress',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'childId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'fromPending',
				type: 'bool',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'toZero',
				type: 'bool',
			},
		],
		name: 'ChildTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'contributor',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'isContributor',
				type: 'bool',
			},
		],
		name: 'ContributorUpdate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'fromTokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'toTokenId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'NestTransfer',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'Transfer',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint64',
				name: 'equippableGroupId',
				type: 'uint64',
			},
			{
				indexed: true,
				internalType: 'uint64',
				name: 'slotPartId',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'parentAddress',
				type: 'address',
			},
		],
		name: 'ValidParentEquippableGroupIdSet',
		type: 'event',
	},
	{
		inputs: [],
		name: 'RMRK_INTERFACE',
		outputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'VERSION',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
			{
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
		],
		name: 'acceptAsset',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'parentId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'childIndex',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'childAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'childId',
				type: 'uint256',
			},
		],
		name: 'acceptChild',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
			{
				internalType: 'uint64',
				name: 'replacesAssetWithId',
				type: 'uint64',
			},
		],
		name: 'addAssetToToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'parentId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'childId',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'addChild',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'equippableGroupId',
				type: 'uint64',
			},
			{
				internalType: 'address',
				name: 'catalogAddress',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'metadataURI',
				type: 'string',
			},
			{
				internalType: 'uint64[]',
				name: 'partIds',
				type: 'uint64[]',
			},
		],
		name: 'addEquippableAssetEntry',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'amountLimitPerUser',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'approveForAssets',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'burn',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxChildrenBurns',
				type: 'uint256',
			},
		],
		name: 'burn',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'parent',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
			{
				internalType: 'uint64',
				name: 'slotId',
				type: 'uint64',
			},
		],
		name: 'canTokenBeEquippedWithAssetIntoSlot',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'parentId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
		],
		name: 'childOf',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'tokenId',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'contractAddress',
						type: 'address',
					},
				],
				internalType: 'struct IERC6059.Child',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'parentId',
				type: 'uint256',
			},
		],
		name: 'childrenOf',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'tokenId',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'contractAddress',
						type: 'address',
					},
				],
				internalType: 'struct IERC6059.Child[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'directOwnerOf',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'tokenId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'childIndex',
						type: 'uint256',
					},
					{
						internalType: 'uint64',
						name: 'assetId',
						type: 'uint64',
					},
					{
						internalType: 'uint64',
						name: 'slotPartId',
						type: 'uint64',
					},
					{
						internalType: 'uint64',
						name: 'childAssetId',
						type: 'uint64',
					},
				],
				internalType: 'struct IERC6220.IntakeEquip',
				name: 'data',
				type: 'tuple',
			},
		],
		name: 'equip',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'getActiveAssetPriorities',
		outputs: [
			{
				internalType: 'uint64[]',
				name: '',
				type: 'uint64[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'getActiveAssets',
		outputs: [
			{
				internalType: 'uint64[]',
				name: '',
				type: 'uint64[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'getApproved',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'getApprovedForAssets',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
		],
		name: 'getAssetAndEquippableData',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
			{
				internalType: 'uint64',
				name: '',
				type: 'uint64',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint64[]',
				name: '',
				type: 'uint64[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
		],
		name: 'getAssetMetadata',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint64',
				name: 'newAssetId',
				type: 'uint64',
			},
		],
		name: 'getAssetReplacements',
		outputs: [
			{
				internalType: 'uint64',
				name: '',
				type: 'uint64',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'targetCatalogAddress',
				type: 'address',
			},
			{
				internalType: 'uint64',
				name: 'slotPartId',
				type: 'uint64',
			},
		],
		name: 'getEquipment',
		outputs: [
			{
				components: [
					{
						internalType: 'uint64',
						name: 'assetId',
						type: 'uint64',
					},
					{
						internalType: 'uint64',
						name: 'childAssetId',
						type: 'uint64',
					},
					{
						internalType: 'uint256',
						name: 'childId',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'childEquippableAddress',
						type: 'address',
					},
				],
				internalType: 'struct IERC6220.Equipment',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'getPendingAssets',
		outputs: [
			{
				internalType: 'uint64[]',
				name: '',
				type: 'uint64[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
		],
		name: 'isApprovedForAll',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
		],
		name: 'isApprovedForAllForAssets',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'childAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'childId',
				type: 'uint256',
			},
		],
		name: 'isChildEquipped',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'contributor',
				type: 'address',
			},
		],
		name: 'isContributor',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'isTransferable',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'contributor',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'grantRole',
				type: 'bool',
			},
		],
		name: 'manageContributor',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'mint',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'destinationId',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'nestTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'ownerOf',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'ownerToTokenId',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'parentId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
		],
		name: 'pendingChildOf',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'tokenId',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'contractAddress',
						type: 'address',
					},
				],
				internalType: 'struct IERC6059.Child',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'parentId',
				type: 'uint256',
			},
		],
		name: 'pendingChildrenOf',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'tokenId',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'contractAddress',
						type: 'address',
					},
				],
				internalType: 'struct IERC6059.Child[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxRejections',
				type: 'uint256',
			},
		],
		name: 'rejectAllAssets',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxRejections',
				type: 'uint256',
			},
		],
		name: 'rejectAllChildren',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
			{
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
		],
		name: 'rejectAsset',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amountLimitPerUser_',
				type: 'uint256',
			},
		],
		name: 'setAmountLimitPerUser',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'setApprovalForAllForAssets',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint64[]',
				name: 'priorities',
				type: 'uint64[]',
			},
		],
		name: 'setPriority',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'interfaceId',
				type: 'bytes4',
			},
		],
		name: 'supportsInterface',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalAssets',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'destinationId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'childIndex',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'childAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'childId',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'isPending',
				type: 'bool',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'transferChild',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint64',
				name: 'assetId',
				type: 'uint64',
			},
			{
				internalType: 'uint64',
				name: 'slotPartId',
				type: 'uint64',
			},
		],
		name: 'unequip',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const