import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledWrapper>
      {/* <StyledTitle>
        <Emoji>💬</Emoji> Contact
      </StyledTitle> */}
      <div className="content">
        <div className="top">
          <Image src={CONFIG.profile.image} fill alt="" />
        </div>
      </div>
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub className="icon" />
            <div className="name">github</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram className="icon" />
            <div className="name">instagram</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            css={{ overflow: "hidden" }}
          >
            <AiOutlineMail className="icon" />
            <div className="name">email</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin className="icon" />
            <div className="name">linkedin</div>
          </a>
        )}
      </StyledWrapper>
    </>
  )
}

export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  > .content {
    margin-bottom: 2.25rem;
    border-radius: 1rem;
    border: 1px solid #DFDFDE;
    width: 100%;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    @media (min-width: 768px) {
      padding: 1rem;
    }
    @media (min-width: 1024px) {
      padding: 1rem;
    }
    .top {
      position: relative;
      width: 100%;
      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    }
  }


  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid #DFDFDE;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
