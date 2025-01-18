import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectModal() {
  return (
    <div className="fixed left-30 top-4 p-2  transition-all">
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Modal" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value="apple">Chatgpt</SelectItem>
          <SelectItem value="banana">Claude</SelectItem>
          <SelectItem value="blueberry">Gemini</SelectItem>
          <SelectItem value="grapes">Bard</SelectItem>
          <SelectItem value="pineapple">Meta</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}
