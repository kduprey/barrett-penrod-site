import { useRouter } from "next/router";
import { NextPageWithLayout } from "../types";
import Layout from "./layout";

type Props = {};

const ConfirmBooking: NextPageWithLayout = (props: Props) => {
	const router = useRouter();
	const { id } = router.query;

	// ?assigned_to=Barrett%20Penrod%20Voice%20Studio&event_type_uuid=71e3dfdc-0750-4bb7-806a-60b8862df055&event_type_name=Voice%20Lesson&event_start_time=2022-06-25T14%3A00%3A00-04%3A00&event_end_time=2022-06-25T15%3A00%3A00-04%3A00&invitee_uuid=86c213f5-52fe-423d-bcf1-1549fc79f93f&invitee_full_name=Kenton%20Duprey&invitee_email=kdtech18%40gmail.com

	return (
		<div>
			<h1>{id}</h1>
		</div>
	);
};

export default ConfirmBooking;

ConfirmBooking.getLayout = (page) => <Layout>{page}</Layout>;
