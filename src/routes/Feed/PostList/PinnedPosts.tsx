import PostCard from "src/routes/Feed/PostList/PostCard"
import React, { useMemo } from "react"
import usePostsQuery from "src/hooks/usePostsQuery"
import styled from "@emotion/styled"
import { filterPosts } from "./filterPosts"
import { DEFAULT_CATEGORY } from "src/constants"

type Props = {
  q: string
}

const PinnedPosts: React.FC<Props> = ({ q }) => {
  const data = usePostsQuery()

  const filteredPosts = useMemo(() => {
    const baseFiltered = filterPosts({
      posts: data,
      q,
      category: DEFAULT_CATEGORY,
      order: "desc",
    })
    return baseFiltered.filter((post) => post.tags?.includes("Pinned"))
  }, [data, q])

  if (filteredPosts.length === 0) return null

  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="header">📌</div>
      </div>
      <div className="my-2">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} data={post} showMedia={false} />
        ))}
      </div>
    </StyledWrapper>
  )
}

export default PinnedPosts

const StyledWrapper = styled.div`
  position: relative;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header {
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 0.25rem;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    cursor: pointer;
  }
`