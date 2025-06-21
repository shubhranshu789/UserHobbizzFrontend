"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  selectedValue: string
  selectedLabel: string
  handleSelect: (value: string, label: string) => void
}

const SelectContext = React.createContext<SelectContextType | undefined>(undefined)

const useSelectContext = () => {
  const context = React.useContext(SelectContext)
  if (!context) {
    throw new Error("Select components must be used within a Select")
  }
  return context
}

export interface SelectProps {
  children: React.ReactNode
  onValueChange?: (value: string) => void
}

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  value: string
}

export interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(({ children, onValueChange }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState("")
  const [selectedLabel, setSelectedLabel] = React.useState("")

  const handleSelect = (value: string, label: string) => {
    setSelectedValue(value)
    setSelectedLabel(label)
    setIsOpen(false)
    onValueChange?.(value)
  }

  const contextValue: SelectContextType = {
    isOpen,
    setIsOpen,
    selectedValue,
    selectedLabel,
    handleSelect,
  }

  return (
    <SelectContext.Provider value={contextValue}>
      <div ref={ref} className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  )
})
Select.displayName = "Select"

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, setIsOpen, selectedLabel } = useSelectContext()

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        <span>{selectedLabel || children}</span>
        <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform", isOpen && "rotate-180")} />
      </button>
    )
  },
)
SelectTrigger.displayName = "SelectTrigger"

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(({ className, children, ...props }, ref) => {
  const { isOpen } = useSelectContext()

  if (!isOpen) return null

  return (
    <div
      ref={ref}
      className={cn(
        "absolute top-full left-0 z-50 w-full mt-1 max-h-96 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        className,
      )}
      {...props}
    >
      <div className="p-1 max-h-96 overflow-auto">{children}</div>
    </div>
  )
})
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, ...props }, ref) => {
    const { handleSelect } = useSelectContext()

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault()
      handleSelect(value, children as string)
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </div>
    )
  },
)
SelectItem.displayName = "SelectItem"

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(({ placeholder, className, ...props }, ref) => (
  <span ref={ref} className={cn("text-muted-foreground", className)} {...props}>
    {placeholder}
  </span>
))
SelectValue.displayName = "SelectValue"

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue }
