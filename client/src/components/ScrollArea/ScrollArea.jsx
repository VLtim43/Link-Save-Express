import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import { LinkComponent } from "../LinkComponent/LinkComponent"


export const ScrollAreaComp = ({ linkArray }) => (
    <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport className="ScrollAreaViewport">
            {linkArray.map((link) => (
                <LinkComponent text={link.text} label={link.label} />
            ))}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
);

