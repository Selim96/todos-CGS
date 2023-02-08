import React from "react";
import ViewBtn from "./ViewBtn/ViewBtn";
import DeleteBtn from "./DeleteBtn/DeleteBtn";
import StatusSwitch from "./StatusSwitch/StatusSwitch";
import PrivateSwitch from "./PrivateSwitch/PrivateSwitch";
import s from './style.module.scss';

export type Props = {
    checked?: boolean | undefined;
    itemId: string;
};

const Actions: React.FC<Props> = ({ checked, itemId }) => (
    <div className={s.actions}>
        <ViewBtn itemId={itemId} />
        <DeleteBtn itemId={itemId} />
        <StatusSwitch checked={checked} itemId={itemId} />
    </div>
);

export { StatusSwitch, PrivateSwitch };
export default Actions;
