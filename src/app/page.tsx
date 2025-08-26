"use client";
import Image from "next/image";
import styled from "styled-components";
import { BsBoxSeam, BsGlobe2, BsPersonCircle } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa6";


export default function Home() {
    return (
        <Container>
            <Header>
                <Logo>
                    <Image
                        src="/logo/logoV.png"
                        alt="B4K Logo"
                        width={40}
                        height={40}
                        priority
                    />
                </Logo>
                <Icons>
                    <BsBoxSeam size={24}/>
                    <BsGlobe2 size={24}/>
                    <BsPersonCircle size={24}/>
                </Icons>
            </Header>

            <Main>
                <MLogo>
                    <Image
                        src="/logo/logoH.png"
                        alt="B4K Logo"
                        width={300}
                        height={80}
                        priority
                    />
                </MLogo>

                <SearchBar>
                    <input type="text" placeholder="search" />
                    <button>
                        <IoSearchSharp size={24} />
                    </button>
                </SearchBar>

                <CategoryRow>
                    <Category>
                        <Image src="/icons/film.svg" alt="Drama & Film" width={50} height={50} className="white-icon"/>
                        <span>Drama & Film</span>
                    </Category>
                    <Category>
                        <Image src="/icons/music.svg" alt="Music & Concerts" width={50} height={50} className="white-icon"/>
                        <span>Music & Concerts</span>
                    </Category>
                    <Category>
                        <Image src="/icons/food.svg" alt="Food & Restaurants" width={50} height={50} className="white-icon"/>
                        <span>Food & Restaurants</span>
                    </Category>
                    <Category>
                        <Image src="/icons/beauty.svg" alt="K-Beauty" width={50} height={50}className="white-icon"/>
                        <span>K-Beauty</span>
                    </Category>
                </CategoryRow>
            </Main>

            <Footer>
                <span>About us</span>
                <Socials>
                    <a><FaInstagram size={20}/></a>
                    <a><FaTiktok size={20}/></a>
                    <a><FaLinkedin size={20}/></a>
                </Socials>
            </Footer>
        </Container>
    );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  background: url("/bg/color4bg.png") no-repeat center center;
  background-size: cover;
  color: white;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: auto;
    max-height: 40px;
    width: auto;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 2rem;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

const MLogo = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  width: min(80%, 500px);

  input {
    flex: 1;
    border: none;
    background: white;
    outline: none;
    font-size: 1rem;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    color: #4b006e;
  }
`;

const CategoryRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
  width: 80%;
  max-width: 600px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  opacity: 50%;

  span {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 0.9rem;
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
`;