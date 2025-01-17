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

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Modal" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Chatgpt</SelectItem>
          <SelectItem value="banana">Claude</SelectItem>
          <SelectItem value="blueberry">Gemini</SelectItem>
          <SelectItem value="grapes">Bard</SelectItem>
          <SelectItem value="pineapple">Meta</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
