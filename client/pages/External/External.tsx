import React, { useEffect } from "react";
import { Typography } from "@takurinton/ingred-ui";
import { Layout } from "../../Layout";
import { Container, Heading, Link } from "./styled";
import { useRecoilState } from "recoil";
import { externalLinksState } from "../../utils/recoil/atom";

export const External: React.FC<any> = Layout(({ props }) => {
  const [externalLinks, _] = useRecoilState(externalLinksState);
  const isServer = typeof window === "undefined";
  const external = isServer
    ? props
    : externalLinks.length === 0
    ? JSON.parse(props)
    : externalLinks;

  useEffect(() => {
    document.querySelector("title").innerText =
      "外部に投稿した記事一覧 | たくりんとんのブログ";
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const y = date.getFullYear();
    const m = ("00" + (date.getMonth() + 1)).slice(-2);
    const d = ("00" + date.getDate()).slice(-2);
    return `${y}/${m}/${d}`;
  };

  return (
    <Container>
      <Heading>
        <Typography weight="bold" size="xxxxxxl" color="#222222">
          外部に投稿した記事一覧
        </Typography>
      </Heading>
      {external.map((ex) => (
        <div key={ex.url}>
          <h2>
            <Link href={ex.url} target="_blank">
              {ex.title}
            </Link>
          </h2>
          <Typography weight="bold" size="xl">
            {formatDate(ex.date)}
          </Typography>
          <p>{ex.content}</p>
          <hr />
        </div>
      ))}
    </Container>
  );
});
