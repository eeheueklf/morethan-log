import { CONFIG } from "site.config"
import React from "react"
import styled from "@emotion/styled"

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <FooterContainer>
        <a
          href={`https://github.com/${CONFIG.profile.github}`}
          target="_blank"
          rel="noreferrer"
        >
          © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
        </a>
        <HitCounter href="https://hits.seeyoufarm.com">
          <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcloudys.azurewebsites.net&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" />
        </HitCounter>
      </FooterContainer>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  a {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray10};
  }
`
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 16px;
`;

const HitCounter = styled.a`
  margin-top: 8px;
`;