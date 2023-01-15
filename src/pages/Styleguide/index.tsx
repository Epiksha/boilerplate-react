import React, { ChangeEvent, useState } from "react";

import Checkboxes from "@Components/Checkboxes";
import { Heading } from "@Types/typography";
import Image from "@Components/Image";
import Spinner from "@Components/Spinner";
import Range from "@Components/Range";
import Icon from "@Components/Icon";
import Radios from "@Components/Radios";

export const Styleguide: React.FC = () => {
    const [checkboxes, setCheckboxes] = useState([
        {
            id: "checkbox-one",
            isDisabled: true,
            isSelected: true,
            label: "Checkbox One",
            name: "Checkbox One",
        },
        {
            id: "checkbox-two",
            isSelected: true,
            label: "Checkbox Two",
            name: "Checkbox Two",
        },
        {
            id: "checkbox-three",
            isSelected: false,
            label: "Checkbox Three",
            name: "Checkbox Three",
        },
    ]);

    const [radios, setRadios] = useState([
        {
            id: "radio-one",
            label: "Radio One",
            isSelected: true,
        },
        {
            id: "radio-two",
            label: "Radio Two",
            isSelected: false,
        },
        {
            id: "radio-three",
            label: "Radio Three",
            isSelected: false,
        },
    ]);

    const [rangeValue, setRangeValue] = useState<number>(50);

    const checkboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckboxes(checkboxes.map(checkbox => {
            if (checkbox.id === event.target.id) {
                checkbox.isSelected = !checkbox.isSelected;
            }

            return checkbox;
        }));
    };

    const radiosChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRadios(radios.map(radio => {
            if (radio.id === event.target.id) {
                radio.isSelected = true;
            } else {
                radio.isSelected = false;
            }

            return radio;
        }));
    };

    const handleRangeChange = (value: number) => {
        setRangeValue(value);
    };

    return (
        <main className="styleguide">
            <h1>Styleguide</h1>

            <section className="styleguide__section">
                <Checkboxes
                    label="Checkboxes"
                    checkboxes={checkboxes}
                    onChange={checkboxChange}
                    headingType={Heading.Two}
                />
            </section>

            <section className="styleguide__section">
                <h2>Icons</h2>

                <div className="styleguide__icons">
                    <Icon name="arrow" />
                    <Icon name="checkmark" />
                    <Icon name="close" />
                    <Icon name="spinner" />
                </div>
            </section>

            <section className="styleguide__section">
                <h2>Images</h2>

                <div className="styleguide__images">
                    <Image src="react.png" />
                    <Image src="react.png" />
                </div>
            </section>

            <div className="styleguide__section">
                <div className="styleguide__radios">
                    <Radios
                        defaultId="radio-two"
                        radios={radios}
                        label="Radios"
                        headingType={Heading.Two}
                        group="styleguide-radios"
                        onChange={radiosChange}
                    />

                    <Radios
                        defaultId="radio-two"
                        radios={radios}
                        isDisabled={true}
                        group="styleguide-radios"
                        onChange={radiosChange}
                    />
                </div>
            </div>

            <section className="styleguide__section">
                <h2>Range</h2>

                <Range onChange={handleRangeChange} value={rangeValue} />
            </section>

            <section className="styleguide__section">
                <h2>Spinner</h2>

                <Spinner />
            </section>
        </main>
    );
};

export default Styleguide;