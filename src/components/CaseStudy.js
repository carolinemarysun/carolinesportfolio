import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    max-width: 24rem;
    height: 17.7rem;
    border: 1px solid var(--neutral-800);
    background-color: transparent;
    border-radius: 10px;
    overflow: hidden;
    padding: 0;

    &:hover {
        transition: border-color 0.5s ease;
        border-color: white;
    }
`;

const CardLink = styled.a`
    text-decoration: none; 
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    margin: 0;
`;

const CardTitle = styled.p`
    color: white !important;
    padding: 14px;
    padding-top: 16px;
    padding-bottom: 1px;
    margin: 0;
`;

const CaseStudy = ({ title, imageSrc, link }) => {
    return (
        <Card>
            <CardLink href={link} target="_blank" rel="noopener noreferrer">
                <ImageWrapper>
                    <CardImage src={imageSrc} alt={`${title} Image`} />
                </ImageWrapper>
                <div className="card-body">
                    <CardTitle>{title}</CardTitle>
                </div>
            </CardLink>
        </Card>
    );
};

export default CaseStudy;
