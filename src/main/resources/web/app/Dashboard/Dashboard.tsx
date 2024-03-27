import * as React from 'react';
import {PageSection, Title, Spinner, TextContent, Text, TextVariants} from '@patternfly/react-core';
import useFetch from "react-fetch-hook";

const Dashboard: React.FunctionComponent = () => {
  const {isLoading, data} = useFetch("/api/hello", {
    formatter: r => r.text()
  });
  return (
    <>
      <PageSection>
        <Title headingLevel="h1" size="lg">Dashboard Page Title!</Title>
      </PageSection>
      <PageSection isFilled={true}>
        <TextContent>
          <Text component={TextVariants.p}>
            {isLoading ? <Spinner aria-label="Loading Hello World"/> : data}
          </Text>
        </TextContent>
      </PageSection>
    </>
  )
}

export {Dashboard};
