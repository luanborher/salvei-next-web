import { useRouter } from 'next/navigation';
import ArrowLeftIcon from '../Icons/ArrowLeftIcon';
import { ContainerPageContainer, Header, Title, TitleWrapper } from './styles';

interface IContainerPageProps {
  title: string;
  children: React.ReactNode;
  rightContent?: React.ReactNode;
  backButton?: boolean;
  pageStyle?: React.CSSProperties;
  onBackFunction?: () => void;
}

const ContainerPage = ({
  title,
  children,
  rightContent,
  backButton,
  pageStyle,
  onBackFunction,
}: IContainerPageProps) => {
  const router = useRouter();

  return (
    <ContainerPageContainer style={pageStyle}>
      <Header>
        <TitleWrapper>
          {backButton && (
            <ArrowLeftIcon
              onClick={() =>
                onBackFunction ? onBackFunction() : router.back()
              }
            />
          )}

          <Title>{title}</Title>
        </TitleWrapper>

        {rightContent && rightContent}
      </Header>

      {children}
    </ContainerPageContainer>
  );
};

export default ContainerPage;
