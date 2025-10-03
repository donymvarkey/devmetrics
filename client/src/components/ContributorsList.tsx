import type { ContributorProps } from "@/types/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ContributorItem from "./ContributorItem";

const ContributorsList = ({
  contributors,
  title,
}: {
  contributors: ContributorProps[];
  title: string;
}) => {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between px-0">
        <CardTitle className="text-xs text-gray-400/40 font-medium">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="grid grid-cols-4 gap-4">
          {contributors.length > 0 ? (
            contributors.map((contributor, index) => (
              <ContributorItem key={index} contributor={contributor} />
            ))
          ) : (
            <div>
              <p className="text-gray-50/30">No contributors found.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContributorsList;
