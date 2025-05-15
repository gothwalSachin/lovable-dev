import luffy from '../assets/luffy.jpg';

const ProductCard = (props: { username: string, remixes: number }) => {

	return (
		<div className='flex flex-col'>
			<div className='mb-4'>
				<img tabIndex={0} className='rounded-xl border border-[#40403f] object-cover object-center' width='309' height='172' alt='product-card-image' src='https://lovable.dev/_next/image?url=https%3A%2F%2Fpub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev%2F2a63f364-462d-4161-8439-b94a088d60d0%2Fid-preview-8ed129ed--ec1d4f1e-2506-4da5-a91b-34afa90cceb6.lovable.app-1746780963746.png&w=640&q=75' />
			</div>
			<div className='flex items-center'>
				<img width='48' height='48' className='rounded-full mr-3' src={luffy} alt="user-logo" />
				<div>
					<p className='text-md font-semibold'>{props.username}</p>
					<p className='text-sm'>{props.remixes} Remixes</p>
				</div>
			</div>
		</div>
	)
}

export default ProductCard;
