import dynamic from "next/dynamic";
const NexmentDiv = dynamic(() => import("./Nexment"), {
  ssr: false,
});
export default NexmentDiv;
