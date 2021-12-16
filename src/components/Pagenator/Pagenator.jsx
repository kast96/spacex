let Pagenator = ({currentPage, totalPages, onPageChanged}) => {
	let pages = [];
	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}

    return (
        <div>
			{
				pages.map(page => 
					<span key={page} className={currentPage === page ? 'is-active' : ''} onClick={() => {onPageChanged(page)}}>{page}</span>
				)
			}
        </div>
    )
}

export default Pagenator;