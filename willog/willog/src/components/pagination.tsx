import styled from "styled-components";

type Props = {
  total: number;
  limit: number;
  page: number;
  setPage: (page: number) => void;
};

export default function Pagination({ total, limit, page, setPage }: Props) {
  const numPage = Math.ceil(total / limit);

  return (
    <PaginationWrapper>
      <PaginationBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </PaginationBtn>
      {Array(numPage)
        .fill(0)
        .map((_, index) => {
          return (
            <PaginationBtn key={index} onClick={() => setPage(index + 1)}>
              {index + 1}
            </PaginationBtn>
          );
        })}

      <PaginationBtn
        onClick={() => setPage(page + 1)}
        disabled={page === numPage}
      >
        &gt;
      </PaginationBtn>
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
`;

const PaginationBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
  background: #fff;
`;
