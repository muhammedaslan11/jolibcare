'use client'
import React from "react";
import { values } from "@src/data";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { SectionBadge } from "../ui/sectionBadge";

const Values = () => {
    return (
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
            <Container>
                <div className="max-w-md mx-auto text-start md:text-center">
                    <SectionBadge title="Our Values" />
                    <p className="text-muted-foreground mt-6">
                        Here Is Some Of Our Values
                    </p>
                </div>
            </Container>
            <Container>
                <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-white first:border-l-2 lg:first:border-none first:border-white">
                        {values.map((perk) => (
                            <div key={perk.title} className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                                <div className="flex items-center justify-center">
                                    <perk.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-medium mt-4">
                                    {perk.title}
                                </h3>
                                <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                    {perk.info}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default Values;
