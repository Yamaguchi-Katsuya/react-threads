import React from 'react';
import Form from '../../ui/threads/new/Form';
import Heading from '../../ui/Heading';

export default function NewThread(): React.JSX.Element {
    return (
        <section className="w-1/2 mx-auto mt-10 flex flex-col gap-5 justify-center items-center">
            <Heading heading="スレッド 新規作成" />
            <Form />
        </section>
    );
};
