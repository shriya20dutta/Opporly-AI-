import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ApiError, HealthStatus, OpportunityAnalysisInput, OpportunityAnalysisResponse } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getAnalyzeOpportunitiesUrl: () => string;
/**
 * Compares a user-provided profile with a set of opportunity listings. Listings and eligibility details are not externally verified.
 * @summary Analyze opportunity matches with AI
 */
export declare const analyzeOpportunities: (opportunityAnalysisInput: OpportunityAnalysisInput, options?: Parameters<typeof customFetch>[1]) => Promise<OpportunityAnalysisResponse>;
export declare const getAnalyzeOpportunitiesMutationKey: () => readonly ["analyzeOpportunities"];
export declare const getAnalyzeOpportunitiesMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof analyzeOpportunities>>, TError, AnalyzeOpportunitiesMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof analyzeOpportunities>>, TError, AnalyzeOpportunitiesMutationVariables, TContext>;
export type AnalyzeOpportunitiesMutationResult = NonNullable<Awaited<ReturnType<typeof analyzeOpportunities>>>;
export type AnalyzeOpportunitiesMutationBody = BodyType<OpportunityAnalysisInput>;
export type AnalyzeOpportunitiesMutationError = ErrorType<ApiError>;
export type AnalyzeOpportunitiesMutationVariables = {
    data: BodyType<OpportunityAnalysisInput>;
};
/**
* @summary Analyze opportunity matches with AI
*/
export declare const useAnalyzeOpportunities: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof analyzeOpportunities>>, TError, AnalyzeOpportunitiesMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof analyzeOpportunities>>, TError, AnalyzeOpportunitiesMutationVariables, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map