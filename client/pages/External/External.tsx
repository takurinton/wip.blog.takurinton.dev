import React, { useEffect, useState } from "react";
import { Flex, Typography } from "@takurinton/ingred-ui";
import { Container, Link } from "./styled";

type ExternalType = {
  url: string;
  title: string;
  date: string;
  content: string;
}[];

export const External: React.FC<{ props: ExternalType | string }> = ({
  props,
}) => {
  const [externalLinks, setExternalLinks] = useState([] as ExternalType);
  const isServer = typeof window === "undefined";

  useEffect(() => {
    document.querySelector("title").innerText =
      "外部に投稿した記事一覧 | たくりんとんのブログ";

    if (isServer && typeof props !== "string") {
      setExternalLinks(props);
    } else {
      (async () => {
        await fetch("./external.json")
          .then((res) => res.json())
          .then((externalLinks) => {
            setExternalLinks(externalLinks);
          });
      })();
    }
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
      <Typography weight="bold" size="xxxxxxl" align="center">
        外部に投稿した記事一覧
      </Typography>
      {externalLinks.map((ex) => (
        <Flex key={ex.url}>
          <Typography weight="bold" component="h2" size="xxxxl">
            <Link href={ex.url} target="_blank">
              {ex.title}
            </Link>
          </Typography>
          <Typography weight="bold" size="xl">
            {formatDate(ex.date)}
          </Typography>
          <Typography component="p" size="xl">
            {ex.content}
          </Typography>
          <hr />
        </Flex>
      ))}
    </Container>
  );
};
