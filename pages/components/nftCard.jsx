export const NFTCard = ({ nft }) => {
  return (
    <div className="w-1/4 flex flex-col border-2 border-gray-700 rounded-md">
      <div className="rounded-md">
        <img
          className="object-cover h-128 w-full rounded-t-md"
          src={nft.media[0].gateway}
          alt="NFT Image"
        />
      </div>
      <div>
        <h2 className="text-xl text-gray-800">{nft.title}</h2>
        <p className="text-gray-600">
          {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}
        </p>
        <p className="text-gray-600">{`${nft.contract.address.substr(
          0,
          4
        )}...${nft.contract.address.substr(
          nft.contract.address.length - 4
        )}`}</p>
      </div>
      <div className="flex-grow mt-2">
        <p className="text-gray-600">{nft.description?.substr(0, 150)}</p>
      </div>
      <div className="flex justify-center mb-1">
        <a
          target="_blank"
          href={`https://etherscan.io/token/${nft.contract.address}`}
          className="py-2 px-4 bg-blue-500 w-1/2 text-center rounded-sm text-white cursor-pointer"
        >
          View on Etherscan
        </a>
      </div>
    </div>
  );
};
