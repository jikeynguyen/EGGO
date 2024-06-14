import { getCurrentUser } from "../actions/getCurrentUser";
import getListings from "../actions/getListings";

import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";


const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Bạn chưa đăng nhập"
          subtitle="Đăng nhập để quản lý các sân cho thuê của bạn."
        />
      </ClientOnly>
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Có vẻ như không có sân nào dành cho bạn."
          subtitle="Hãy bắt đầu đăng ký sân của bạn để trở thành đối tác của EGGO"
        />

      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient 
        listings={listings}
        currentUser={currentUser} 
        
        />
    </ClientOnly>
  );
};

export default PropertiesPage;
