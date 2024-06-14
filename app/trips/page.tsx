import { getCurrentUser } from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";

import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Bạn chưa đăng nhập"
          subtitle="Đăng nhập để xem sân đã đặt."
        />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Không có sân đã đặt"
          subtitle="Đặt một sân chơi để xem sân đã đặt của bạn ở đây."
        />

      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient 
        reservations={reservations}
        currentUser={currentUser} 
        
        />
    </ClientOnly>
  );
};

export default TripsPage;
