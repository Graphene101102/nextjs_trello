import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
    return (
        <Link href="/">
            <div className="transition items-center gap-x-2 hidden">
                {/* <Image
                    src="@/styles/logo.svg"
                    alt="Logo"
                    height={30}
                    width={30}
                /> */}
                <p className="text-lg text-neutral-700 pb-1">
                    Trello
                </p>
            </div>
        </Link>
    );
};
