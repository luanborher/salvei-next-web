import styled from 'styled-components';

export const HeaderRight = styled.div`
  display: flex;
  gap: 12px;

  svg {
    transform: scaleX(-1);
  }
`;

export const PageContent = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BreadcrumbItem = styled.span`
  color: ${({ theme }) => theme.colors.label};
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Tab = styled.button<{ $active: boolean }>`
  position: relative;
  min-width: 151px;
  background: transparent;
  border: none;
  border-radius: 12px 12px 0 0;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : '#C0C0BF'};
  background: ${({ $active }) => ($active ? '#FF850033' : '#7473730F')};
  transition: all ease-in 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  padding-left: 20px;
  margin-bottom: 76px;
  background-color: #ffffff;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`;

export const PhotoUploadSection = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.label};
  margin-bottom: 12px;

  span {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const PhotoUploadArea = styled.div`
  width: 100%;
  height: 270px;
  background: #ffffff;
  border: 1px solid #e3e3e4;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 12px;
  position: relative;
`;

export const PhotoText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text2};
  margin: 0;
`;

export const PreviewGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 22px 24px;
  padding-right: 80px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 0px !important;
    width: 0px !important;
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const PreviewImage = styled.img`
  min-width: 242px;
  width: 242px;
  height: 219px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ShowMoreButton = styled.div`
  cursor: pointer;
`;

export const UploadButton = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  background: #ffffff;
  border: 1px solid #e3e3e4;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.label};
`;

export const UploaderIcon = styled.span`
  width: 50px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0px 8px 8px 0px;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FormRow = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
`;

export const LocationSection = styled.div`
  width: 100%;
  height: 198px;
  background: #f2f2f2;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const LocationText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.text2};
  margin: 0;
`;

export const CharacteristicsTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 24px 0;
`;

export const CounterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;
`;

export const CounterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CounterIcon = styled.div`
  width: 49px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7473731a;
`;

export const CounterLabel = styled.span`
  color: ${({ theme }) => theme.colors.label};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

export const CounterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const CounterInput = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid #d6d5d3;
`;

export const CounterValue = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.input};
  min-width: 30px;
  text-align: center;
  user-select: none;
`;

export const ImageWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: -9px;
    right: -9px;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
