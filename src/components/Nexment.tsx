import React from "react";
import { NexmentContainer } from "nexment";

const Nexment = () => {
  const config = {
    pageKey: "docTodo",
    enableLinkInput: true,
    enableReplyListModal: false,
    leancloud: {
      appId: "6Kcb9HB1iOR87HUbAvnMyUER-gzGzoHsz",
      appKey: "zf3gAf9CGIHLL8Crctb0sJLV",
      serverURL: "https://leancloud.ouorz.com",
    },
    admin: {
      name: "TonyHe",
      email: "he@holptech.com",
    },
  };
  return <NexmentContainer config={config} />;
};

export default Nexment;
