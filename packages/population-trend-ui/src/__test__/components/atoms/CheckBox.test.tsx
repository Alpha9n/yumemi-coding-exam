import { CheckBox } from '../../../index';
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { test, describe, expect, vi } from "vitest";
import { setup } from '../../utils/testUtils';
import React from 'react';

describe('checkBox ロジックテスト', () => {
    test('初期状態', async () => {
        setup(<CheckBox label="hoge"/>);
        const target = await screen.findByRole('checkbox');
        expect(target).not.toBeChecked(); // 初期状態
    });

    test('クリック時チェックがつく', async () => {
        const { user } = setup(<CheckBox label="hoge"/>);
        const target = await screen.findByRole('checkbox');
        await user.click(target);
        expect(target).toBeChecked();
    });

    test('ラベルクリック時チェックがつく', async () => {
        const labelText = 'hoge';
        const { user } = setup(<CheckBox label={labelText}/>);
        const target = await screen.findByText(labelText);
        await user.click(target);
        const checkBox = await screen.findByRole('checkbox');
        expect(checkBox).toBeChecked();
    });

    test('クリック時に渡されたステートを変更する', async () => {
        const setState = vi.fn((state: boolean) => {return state});
        const { user } = setup(<CheckBox label="hoge" onClick={setState}/>);
        const target = await screen.findByRole('checkbox');
        await user.click(target);
        expect(setState).toHaveReturnedWith(true);
    });
});

describe('checkbox 外観テスト', () => {
    test('初期状態', async () => {
        setup(<CheckBox label="hoge"/>);
        const target = await screen.findByRole('checkbox');
        expect(target).toHaveStyle({ backgroundColor: '#ffffff' });
    });

    test('クリック時色合いが反転する', async () => {
        const labelText = 'hoge';
        const { user } = setup(<CheckBox label={labelText}/>);
        const target = await screen.findByText(labelText);
        await user.click(target);
        const checkBox = await screen.findByRole('checkbox');
        expect(checkBox).toHaveStyle({ backgroundColor: '#464646' });
    });
});