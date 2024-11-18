import { FocusCards } from "@/components/ui/focus-cards";
import { placedStudentcards } from "@/data/data";

export default function page() {
	return <FocusCards cards={placedStudentcards} />;
}
