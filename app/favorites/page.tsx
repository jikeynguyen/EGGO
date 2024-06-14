import { getCurrentUser } from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoritesClientOnly from "./FavoritesClientOnly";

const FavoritesPage = async () => {
  const favorites = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (favorites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Bạn chưa có sân yêu thích nào"
          subtitle="Có vẻ như bạn chưa thêm bất kỳ sân nào vào danh sách yêu thích của mình. Hãy tiếp tục và tìm sân chơi thể thao mơ ước của bạn và thêm nó vào mục yêu thích của bạn"
          showRest
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavoritesClientOnly favorites={favorites} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritesPage;
