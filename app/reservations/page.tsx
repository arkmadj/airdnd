import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

const ReservationPage = async() => {
  const currentUser = await getCurrentUser()

  if(!currentUser){
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login"/>
      </ClientOnly>
    )
  }
  return (  );
}
 
export default ReservationPage;