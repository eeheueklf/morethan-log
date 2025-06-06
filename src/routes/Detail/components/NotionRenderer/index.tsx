import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { ExtendedRecordMap } from "notion-types"
import useScheme from "src/hooks/useScheme"

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css"

// used for code syntax highlighting (optional)
import "prismjs/themes/prism.css"

// used for rendering equations (optional)

import "katex/dist/katex.min.css"
import { FC } from "react"
import styled from "@emotion/styled"
import { pretendard } from "src/assets"

const _NotionRenderer = dynamic(
  () => import("react-notion-x").then((m) => m.NotionRenderer),
  { ssr: false }
)

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    await Promise.all([
      import("prismjs/components/prism-java.js"),
      import("prismjs/components/prism-sql.js"),
      import("prismjs/components/prism-python.js"),
      import("prismjs/components/prism-javascript.js"),
      import("prismjs/components/prism-json.js"),
      // import("prismjs/components/prism-bash.js"),
      // import("prismjs/components/prism-bicep.js"),
      // import("prismjs/components/prism-docker.js"),
      // import("prismjs/components/prism-kusto.js"),
      // import("prismjs/components/prism-log.js"),
      // import("prismjs/components/prism-rego.js"),
      // import("prismjs/components/prism-yaml.js"),
      // import("prismjs/components/prism-markdown.js")
    ])
    return m.Code as any
  })
)

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
)
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
)

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "")
}

type Props = {
  recordMap: ExtendedRecordMap
}

const NotionRenderer: FC<Props> = ({ recordMap }) => {
  const [scheme] = useScheme()
  return (
    <StyledWrapper>
      <_NotionRenderer
        darkMode={scheme === "dark"}
        recordMap={recordMap}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
          nextImage: Image,
          nextLink: Link,
        }}
        mapPageUrl={mapPageUrl}
      />
    </StyledWrapper>
  )
}

export default NotionRenderer

const StyledWrapper = styled.div`
  /* // TODO: why render? */
  .notion-collection-page-properties {
    display: none !important;
  }
  .notion-page {
    padding: 0;
  }
  .notion-code{
    background-color: ${({ theme })  =>
      theme.scheme === "dark" ? "#2d2d2d" : "#f7f6f3;" };
  }
  .notion{
    font-family: ${pretendard.style.fontFamily};
    overflow-wrap: break-word;
  }
  .notion-list {
    width: 100%;
  }
  
`
// .notion-inline-code {
//   background-color: ${({ theme })  =>
//       theme.scheme === "dark" ? "#2d2d2d" : "#ddebf1;" };
//   color: 2px 4px;
//   border-radius: 4px;
//   font-family: "Courier New", monospace;
//   font-size: 0.85rem;
//   }