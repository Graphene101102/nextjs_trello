"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Activity, CircleUserRound, Eye, Heart, LayoutPanelTop, PanelsTopLeft, Plus, Settings } from "lucide-react"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import { useState } from "react"

interface SideBarProps {
    storageKey?: string
}

const SideBar = ({ storageKey = "t-sidebar-state" }: SideBarProps) => {

    const [expanded, setExpanded] = useState(false);
    const onExpand = () => { setExpanded(!expanded) }

    return (
        <div>
            <div className="flex ml-2 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline ">
                <PanelsTopLeft className="rounded-sm object-cover " />
                <span className="ml-4 mt-1"> Boards </span>
            </div>
            <div className="flex ml-2 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline ">
                <LayoutPanelTop className="rounded-sm object-cover " />
                <span className="ml-4 mt-1"> Templates </span>
            </div>
            <div className="flex ml-2 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline ">
                <Activity className="rounded-sm object-cover " />
                <span className="ml-4 mt-1"> Home </span>
            </div>
            <div className="w-full h-0.5 bg-black my-4"></div>
            <div className="font-medium text-xs flex items-center mb-1">
                <span className="pl-2 text-xl">
                    Workspaces
                </span>
                <Button
                    asChild
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="ml-auto"
                >
                    <Link href="/select-org">
                        <Plus className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
            <div>
                <Accordion>
                    <AccordionItem
                        value="1"
                        className="border-none"
                        startContent={
                            <Avatar
                                // isBordered
                                color="primary"
                                radius="lg"
                                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRuFY23z_1MmVFfIWv2HLNpBNvwU_rYCIU9_oqbZnGTTh6QG1ro"
                                className="mr-4 rounded-md"
                            />
                        }

                        title="Graphene"
                    >
                        <ul>
                            <li>
                                <Link className="flex ml-10 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline " href="/">
                                    <PanelsTopLeft className="rounded-sm object-cover " />
                                    <span className="ml-4 mt-1"> Boards </span>
                                </Link>
                            </li>
                            <li>
                                <Link className="flex ml-10 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline " href="/">
                                    <Heart className="rounded-sm object-cover " />
                                    <span className="ml-4 mt-1"> Highlights </span>
                                </Link>
                            </li>
                            <li>
                                <Link className="flex ml-10 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline " href="/">
                                    <Eye className="rounded-sm object-cover " />
                                    <span className="ml-4 mt-1"> Views </span>
                                </Link>
                            </li>
                            <li>
                                <Link className="flex ml-10 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline " href="/">
                                    <CircleUserRound className="rounded-sm object-cover " />
                                    <span className="ml-4 mt-1"> Members </span>
                                </Link>
                            </li>
                            <li>
                                <Link className="flex ml-10 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline " href="/">
                                    <Settings className="rounded-sm object-cover " />
                                    <span className="ml-4 mt-1"> Settings </span>
                                </Link>
                            </li>
                        </ul>


                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    )
}

export default SideBar