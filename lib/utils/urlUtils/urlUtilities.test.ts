import { LinkType } from "../../interfaces/urlInterfaces";
import { getRadioJavanLink, getLinkType } from "./validateLink";

describe("Radio javan url utils", () => {
    describe("Radio Javan Link validation", () => {
        test("Should get the core url with https+www", () => {
            expect(getRadioJavanLink("https://www.radiojavan.com/")).toBe(
                "https://www.radiojavan.com/"
            );
        });
        test("Should get the core url with https", () => {
            expect(getRadioJavanLink("https://radiojavan.com/")).toBe(
                "https://radiojavan.com/"
            );
        });
        test("Should get the core url with http", () => {
            expect(getRadioJavanLink("http://radiojavan.com/")).toBe(
                "http://radiojavan.com/"
            );
        });
        test("Should get the core url without prefix", () => {
            expect(getRadioJavanLink("radiojavan.com/")).toBe(
                "radiojavan.com/"
            );
        });
        test("Should get a random url with the origin of RadioJavan", () => {
            expect(getRadioJavanLink("https://www.radiojavan.com/random")).toBe(
                "https://www.radiojavan.com/random"
            );
        });
    });
    describe("Radio Javan Link Type Identifier", () => {
        test("Should return music type", () => {
            const type = getLinkType(
                "https://www.radiojavan.com/mp3s/mp3/Anita-Nafas"
            );
            expect(type).toBe(LinkType.Music);
        });
        test("Should return music type without prefixes", () => {
            const type = getLinkType("radiojavan.com/mp3s/mp3/Anita-Nafas");
            expect(type).toBe(LinkType.Music);
        });
    });
});
