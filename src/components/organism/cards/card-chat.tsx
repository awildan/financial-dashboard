"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/molecules/card/card";
import { useState } from "react";
import { CardSkeleton } from "~/components/molecules/card/card-skeleton";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { cn } from "~/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/atoms/button/button";
import { receiverAvatar, senderAvatar } from "~/lib/constant";

const CardChat = () => {
  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi, Are you ready?",
      avatar: receiverAvatar,
    },
    {
      role: "user",
      content: "Ready for what?",
      avatar: senderAvatar,
    },
    {
      role: "agent",
      content: "for this job",
      avatar: receiverAvatar,
    },
    {
      role: "user",
      content: "Yess sir!!",
      avatar: senderAvatar,
    },
    {
      role: "user",
      content: "Wait, I need sleep a bit :)",
      avatar: senderAvatar,
    },
  ]);

  const [input, setInput] = useState("");
  const inputLength = input.trim().length;

  return (
    <Card className="bg-white w-1/2 max-h-[480px] flex flex-col">
      <CardHeader className="py-4">
        <CardTitle className="text-base">Awil Friend</CardTitle>
      </CardHeader>
      <CardContent className="grow overflow-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              className={cn(
                "flex",
                message.role === "user"
                  ? "flex-row-reverse space-x-2 space-x-reverse"
                  : "space-x-2"
              )}
              key={index}
            >
              <Avatar>
                <AvatarImage src={message.avatar} alt="avatar" />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
              <div
                className={cn(
                  "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "ml-auto bg-indigo-500 text-primary-foreground"
                    : "bg-indigo-50"
                )}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="items-end">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (inputLength === 0) return;
            setMessages([
              ...messages,
              {
                role: "user",
                content: input,
                avatar: senderAvatar,
              },
            ]);
            setInput("");
          }}
          className="flex w-full items-center space-x-2"
        >
          <Input
            id="message"
            placeholder="Type your message..."
            className="flex-1"
            autoComplete="off"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button type="submit" disabled={inputLength === 0}>
            <PaperAirplaneIcon className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default CardChat;
