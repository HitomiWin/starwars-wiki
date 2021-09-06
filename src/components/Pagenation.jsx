import {Button} from "react-bootstrap"
 const Pagenation = ({page, setPage, data, isPreviousData}) => {
  return (
<div className="pagination d-flex justify-content-between align-items-center mt-4">
					<Button
						onClick={() => setPage(currentPage => Math.max(currentPage - 1, 1))}
						disabled={page === 1}
					>
						Previous Page
					</Button>

					<span>Current Page: {page}</span>

					<Button
						onClick={() => {
							if (!isPreviousData && data.next) {
								setPage(currentPage => currentPage + 1)
							}
						}}
						// Disable the Next Page button until we know a next page is available
						disabled={isPreviousData || !data?.next}
					>
						Next Page
					</Button>
				</div>
  )
}

export default Pagenation
