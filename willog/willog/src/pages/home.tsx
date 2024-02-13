import { useState, useEffect } from "react";
import { getImages } from "../api/images";
import styled from "styled-components";

import { Like } from "../components/icon";
import Pagination from "../components/pagination";
import { Image } from "../type/type";

export default function Home({
  selcted,
  setSelcted,
}: {
  selcted: Image[];
  setSelcted: (data: Image[]) => void;
}) {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  const record = async () => {
    const data = await getImages({
      page: 1,
      per_page: 30,
      order_by: "popular",
    });
    setImages(data);
  };

  useEffect(() => {
    record();
  }, []);

  const handleLike = (data: Image) => {
    if (isCheck(data)) {
      setSelcted(selcted.filter((item) => item.id !== data.id));
    } else {
      setSelcted([...selcted, data]);
    }
  };

  const isCheck = (data: Image) => {
    return selcted.some((item) => item.id === data.id);
  };

  return (
    <>
      <ImageGrid>
        {images.slice(offset, offset + limit).map((data, index) => {
          return (
            <ImageBox key={index}>
              <Item src={data.urls.regular} alt={data.alt_description} />
              <LikeBtn onClick={() => handleLike(data)}>
                <Like
                  width={24}
                  height={24}
                  stroke={isCheck(data) ? "tomato" : "#ebfffa"}
                  fill={isCheck(data) ? "tomato" : "#ebfffa"}
                />
              </LikeBtn>
            </ImageBox>
          );
        })}
      </ImageGrid>
      <Pagination
        total={images.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;
const ImageBox = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    padding-top: 100%;
    background-color: #f5f5f5;
  }
`;

const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: 0;
  padding: 5px 10px;
  cursor: pointer;
  z-index: 1;
`;

const Item = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`;
