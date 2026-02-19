# SearchAddressModal

Modal para buscar e selecionar endereços usando Google Maps.

## Características

- **Largura**: 600px (fixa)
- **Altura**: Responsiva (hug content ~528px)
- **Border Radius**: 12px
- **Padding**: 24px
- **Gap entre elementos**: 24px

## Uso

```tsx
import SearchAddressModal from '@/components/Modals/SearchAddressModal/SearchAddressModal';

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (address: string, coordinates: { lat: number; lng: number }) => {
    console.log('Endereço:', address);
    console.log('Coordenadas:', coordinates);
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        Buscar Endereço
      </button>

      <SearchAddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialAddress=""
      />
    </>
  );
}
```

## Props

| Prop | Tipo | Descrição |
|------|------|-----------|
| `isOpen` | `boolean` | Controla se o modal está aberto |
| `onClose` | `() => void` | Callback chamado ao fechar o modal |
| `onSave` | `(address: string, coordinates: { lat: number; lng: number }) => void` | Callback chamado ao salvar o endereço (opcional) |
| `initialAddress` | `string` | Endereço inicial para preencher o campo de busca (opcional) |

## Configuração do Google Maps

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Ative as APIs:
   - Google Maps JavaScript API
   - Places API
4. Crie uma credencial (API Key)
5. Adicione a chave no arquivo `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua_chave_aqui
```

## Funcionalidades

- ✅ Campo de busca com placeholder "Pesquise no Google Maps"
- ✅ Ícone do Google Maps no campo de busca
- ✅ Mapa interativo do Google Maps
- ✅ Clique no mapa para selecionar localização
- ✅ Marcador visual da localização selecionada
- ✅ Botões "Cancelar" e "Salvar"
- ✅ Design responsivo seguindo o tema laranja (#FF8500)

## Nota

Enquanto a chave da API não estiver configurada, o modal exibirá um placeholder informando que o mapa está carregando.
